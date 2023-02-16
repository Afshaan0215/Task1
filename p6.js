
        var employees = [
        {
            "name": "Naruto",    
            "age": 22,
            "gender": "Male",
            "city": "Hyderabad",
            "salary": 30000
        },
        {
            "name": "Gaara",
            "age": 19,
            "gender": "Male",
            "city": "Mumbai",
            "salary": 20000
        },
        {
            "name": "Hinata", 
            "age": 20,
            "gender": "Female",
            "city": "Banglore",
            "salary": 25000
        },
        {
            "name": "Tsunade",
            "age": 50,
            "gender": "Female",
            "city": "Mumbai",
            "salary": 40000
        },
        {
            "name": "Itachi",
            "age": 32,
            "gender": "Male",
            "city": "Pune",
            "salary": 50000
        },
        {
            "name": "Sasuke",
            "age": 19,
            "gender": "Male",
            "city": "Delhi",
            "salary": 40000
        },
    ];

    // map()

    // employees.map((n)=> {
    //     console.log(n.name);
    // });
    // -----------------------------

    // filter()

    // employees.filter((a)=> {
    //     if(a.age>=20){
    //         console.log(a.age)
    //     }
    // });
    // -----------------------------

    // reduce()
          
    var salaries = employees.reduce((a,b) => a + b.salary,0);
    console.log(salaries);
    // -----------------------------

    //splice()

    //   employees.splice(2,1);
    //   console.log(employees);
    //   --------------------------

    //index

        // console.log(employees[3]);

  