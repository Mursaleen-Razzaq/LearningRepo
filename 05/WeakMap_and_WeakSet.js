// Simple examples demonstrating WeakMap and WeakSet

// WeakMap: keys must be objects; entries are weakly held (allow garbage collection)
{
	const wm = new WeakMap();

	let objKey = { name: 'keyObject' };
	wm.set(objKey, 'some value');

	console.log('WeakMap has key?', wm.has(objKey)); // true
	console.log('Value for key:', wm.get(objKey)); // 'some value'

	// Remove strong reference to the key object. After this, the entry becomes
	// eligible for garbage collection (not immediately observable).
	objKey = null;

	// Can't reliably demonstrate GC in code, but .has will eventually be false
}

// WeakSet: stores objects only; entries are weakly held
{
	const ws = new WeakSet();

	let objA = { id: 1 };
	const objB = { id: 2 };

	ws.add(objA);
	ws.add(objB);

	console.log('WeakSet has objA?', ws.has(objA)); // true
	console.log('WeakSet has objB?', ws.has(objB)); // true

	// Remove strong reference to objA
	objA = null;

	// objA entry is now eligible for garbage collection
	// objB is still reachable, so ws.has(objB) remains true
	console.log('WeakSet still has objB?', ws.has(objB)); // true
}

// Notes:
// - WeakMap and WeakSet are useful for associating data with objects
//   without preventing those objects from being garbage collected.
// - They are not iterable and do not expose size.
