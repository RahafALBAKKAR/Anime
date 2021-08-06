let Profiles = document.getElementById('salmone');

const Seattle =  {
  name: 'Seattle',
  min:23 ,

  max:65,

  avg:6.3,

  cookies: 0,
  total: 0,
  hour:['6am:','7am:','8am:','9am:','10am:','11am:','12pm:','1pm:','2pm:','3pm:','4pm:','5pm:','6pm:','7pm:'],
  randomFun: function(){
    this.cookies = Math.floor(Math.random() * (( this.max - this.min + 1) + this.min));
    this.cookies = Math.floor(this.cookies * this.avg) ;
    this.total = this.total + this.cookies ;
    return this.cookies;
  
  },
  land: function(){
    let articleElement = document.createElement('article');
    Profiles.appendChild(articleElement);

    let h2Element = document.createElement('h2');
    h2Element.textContent = this.name;
    articleElement.appendChild(h2Element);

    let ulElement = document.createElement('ul');
    articleElement.appendChild(ulElement);

    for(let i = 0; i <this.hour.length ; i++) {
      let liElement = document.createElement('li');
      liElement.textContent = this.hour[i] + ' ' + this.randomFun() + '  ' + 'cookies';
      ulElement.appendChild(liElement);
    }
    let liElement = document.createElement('li');
    liElement.textContent = 'Total:' + '     ' + this.total + '  ' + 'cookies';
    ulElement.appendChild(liElement);
  }

};

Seattle.land();
