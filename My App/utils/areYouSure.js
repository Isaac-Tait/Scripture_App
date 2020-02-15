export default function areYouSure() {
  if (element.checked) {
      return false;
  } else {
      if (confirm("Are you sure you want to un-check this?")){
          return true;
      }else {
          element.checked = true;
    } 
  }
};