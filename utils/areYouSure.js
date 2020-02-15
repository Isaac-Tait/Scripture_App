export default function areYouSure(element) {
  if (element.checked) {
      return false;
  } else {
      if (confirm("Are you sure you want to Uncheck this?")){
          return true;
      }else {
          element.checked = true;
    } 
  }
};