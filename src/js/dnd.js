function dnd (){
  console.log('dnd works');
}
function examplepublic(){
  console.log('public works');
  privatef();
}

function privatef(){
  console.log('It does not export, but its works too');
} 

export {
  dnd,
  examplepublic

}