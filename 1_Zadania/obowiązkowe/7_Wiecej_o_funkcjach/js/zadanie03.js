Hi();

function Hi(){
  console.log("Cześć")
};

Hi();

// funkcja wykona się poprawnie zarówno przed jak i po deklaracji funkcji

Hello();
var Hello = function(){ 
  console.log("Witaj")
};

Hello();

// funkcja wykona się tylko po deklaracji zmiennej, przed deklaracją pojawi się błąd 
// (ponieważ nie jest ona widoczna powyżej deklaracji)
