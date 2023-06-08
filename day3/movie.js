var prompt = require('prompt-sync')()

class Movie{
    constructor(){
        this.movieList=['movie1', 'movie2']
        this.movieCity={
            "movie1":["city1", "city2"],
            "movie2":["city2"]
        };
        this.cinemas={
            "city1":["pvr"],
            "city2":["carnival", "inox"]
        };
        this.timings={
            "pvr":{
                "movie1":["9:45a.m.", "1:30p.m"]
            },
            "inox":{
                "movie1":["8:50a.m.", "12:30p.m.", "7:15p.m."],
                "movie2":["9:30a.m.", "1:45p.m.", "5:00p.m."]
            },
            "carnival":{
                "movie1":['5:15p.m.'],
                "movie2":["10:50a.m.", "12:15p.m.", "6:00p.m."]
            }
        }
        this.tickets={
            "pvr":{
                'movie1':{
                    "9:45a.m.":[250, 80],
                    "1.30p.m.":[250, 50]
                }
            },
            "inox":{
                'movie1':{
                    "8:50a.m.":[280, 80],
                    "12:30p.m.":[235, 67],
                    "7:15p.m.":[190, 70]
                },
                'movie2':{
                    "9:30a.m.":[280, 70],
                    "1:45p.m.":[230, 53],
                    "5:00p.m.":[190, 21]
                }
            },
            "carnival":{
                'movie1':{
                    "5:15p.m.":[170, 23],
                },
                'movie2':{
                    "10:50a.m.":[150, 30],
                    "12:15p.m.":[195, 43],
                    "6:00p.m.": [210, 57]
                }
            }
        }
    }
}

class BookTicket extends Movie{
    constructor(movie, city){
        super();
        this.movie = movie;
        this.city = city;
        this.cinema;
        this.time;
        this.price;
        this.numTickets;

        this.selectMovie(); 
    }

    selectMovie(){
        for(let i =0; i<this.movieList.length;i++){
            console.log(this.movieList[i]);
        }
        while(true){
            let movie = prompt('Select movie or type "q" to exit. ')
            if(this.movieList.includes(movie)){
                this.movie = movie;
                break;
            } 
            if(movie==='q') return;
        }
        this.selectCity();
    }

    selectCity(){
        let cities = this.movieCity[this.movie];
        for(let i = 0; i < cities.length; i++){
            console.log(cities[i]);
        }
        while(true){
            let city = prompt('Select City or type "q" to exit ');
            if(this.movieCity[this.movie].includes(city)){
            this.city = city;
            break;
            }
            if(city==='q') return;
        }
        this.showCinema();
    }

    showCinema(){
        let cinemaList = this.cinemas[this.city];
        console.log("Cinemas in "+this.city+" for "+this.movie+":")
        for(let i = 0; i < cinemaList.length; i++){
            console.log(cinemaList[i]);
        }
        console.log('\n');
        this.selectCinema();        
    }

    selectCinema(){
        while(true){
            let cinema = prompt("Select cinema or type 'q' to exit. ");
            if(this.cinemas[this.city].includes(cinema)){
                this.cinema=cinema;
                break;
            }
            if(cinema==='q') return;

        }
        this.showTimings();
    }

    showTimings(){
        console.log("\nTimings: ");
        let timingsList = this.timings[this.cinema][this.movie];
        for(let i = 0; i < timingsList.length; i++){
            console.log(timingsList[i]);
        }
        console.log("\n");
        this.selectTimings();
    }

    selectTimings(){
        while(true){
            let time = prompt("Select slot or type 'q' for exit. ")
            if(this.timings[this.cinema][this.movie].includes(time)){
                this.time = time;
                break;
            }
            if(time==='q') return;
        }
        this.showFare();
    }

    showFare(){
        console.log("For "+this.movie+" in "+this.city+" city having showtime:"+this.time+": ");
        let details = this.tickets[this.cinema][this.movie][this.time];
        for(let i = 0; i < 1; i++){
            console.log("Fare : "+details[0]+", Avaliable Tickets: "+details[1]);
        }
        console.log('\n');
        this.ticketDetails();
    }

    ticketDetails(){
        
        let numTickets = +prompt("Enter Number of tickets: ");
        let availableTickets = this.tickets[this.cinema][this.movie][this.time][1];
        if(numTickets > availableTickets){
            console.log("Sorry "+availableTickets+" tickets avaliable");
        }else{
            this.price= numTickets * this.tickets[this.cinema][this.movie][this.time][0];
            console.log(numTickets+" Tickets cost Rupees "+this.price);
            this.numTickets=numTickets;
            this.book();
            console.log('\n');
        }
    }

    book(){
        while(true){
            var book = prompt("To book type yes, to exit type no: ");
            if(book==='yes') break;
            if(book==='no') return;
        }
        this.tickets[this.cinema][this.movie][this.time][1] -= this.numTickets;
        var accNum = prompt('Enter Account Number:');
        var pin = prompt("Enter pin: ");
        console.log("Debited "+this.price+" from your account");
        console.log("\nTickets Booked\n");
        this.showDetails();
    }
    showDetails(){
        console.log("Movie: "+this.movie)
        console.log("City: "+this.city)
        console.log("Number Of Tickets: "+ this.numTickets);
        console.log("Timings: "+ this.time);
    }
}



let ticket1 = new BookTicket();

