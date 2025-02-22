function toggletable(button){
  let table=button.nextElementSibling;
  if(table.style.display==="none" || table.style.display==="")
  {
    table.style.display="flex";
    button.style.border="1px solid coral";
    button.style.backgroundColor="rgb(1, 1, 1)";
  }
  else
  {
    table.style.display="none";
    button.style.border="1px solid whitesmoke";
    button.style.backgroundColor="rgb(24, 29, 37)";
  }
}