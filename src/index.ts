function hello(username: string) {
  return `Hello ${username}`;
}

document.body.innerHTML = '<h1>' + hello('Pepe') + '</h1>';
