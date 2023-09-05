export function HeadFootEnabler(location) {
  if (
    location.pathname.split('/')[2].toLowerCase() === 'signup' ||
    location.pathname.split('/')[2].toLowerCase() === 'login' ||
    location.pathname.split('/')[2].toLowerCase() === 'forgot' || 
    location.pathname.split('/')[2].toLowerCase() === 'plan' ||
    location.pathname.split('/')[2].toLowerCase() === 'equipment' ||
    location.pathname.split('/')[2].toLowerCase() === 'payment' ||
    location.pathname.split('/')[2].toLowerCase() === 'profile' ||
    location.pathname.split('/')[2].toLowerCase() === 'menu' ||
    location.pathname.split('/')[2].toLowerCase() === 'bar'  ||
    location.pathname.split('/')[2].toLowerCase() === 'event' 
  )
     {
    document.getElementById('Footer').style.display = 'none';
    document.getElementById('Header').style.display = 'none';
  } else {
    document.getElementById('Footer').style.display = 'block';
    document.getElementById('Header').style.display = 'block';
  }
  console.log(location.pathname);
}
