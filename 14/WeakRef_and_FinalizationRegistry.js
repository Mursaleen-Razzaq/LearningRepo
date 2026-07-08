// WeakRef and FinalizationRegistry example...

function showWeakRefExample() {
  let obj = { 
    name: 'cached value' 
};

  const weakRef = new WeakRef(obj);
  console.log('Original object:', obj);
  console.log('WeakRef deref:', weakRef.deref());

  obj = null;

  setTimeout(() => {
    const derefValue = weakRef.deref();
    console.log('WeakRef after losing strong reference:', derefValue);
  }, 1000);
}

//Example
function showFinalizationRegistryExample() {
  const registry = new FinalizationRegistry((heldValue) => {
    console.log('FinalizationRegistry cleanup:', heldValue);
  });

  let resource = { 
    id: 1, 
    name: 'temporary resource' 
};
  registry.register(resource, 'resource cleaned up', resource);

  console.log('Registered resource:', resource);

  resource = null;

  setTimeout(() => {
    console.log('Resource reference dropped; cleanup may happen soon.');
  }, 2000);
}

showWeakRefExample();
showFinalizationRegistryExample();
