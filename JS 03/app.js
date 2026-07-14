var Season = prompt("Enter Your Favourite Season...!!").toLowerCase();


if(Season === "Summer" || Season === "summer"){
    document.write(`
        <div class="summer">
        <div class="pic">
            <img src="summr.jfif" alt="summer">
        </div>
        <div class="txt">
            <h1>Summer</h1>
             <h2>Temperature : 45°C</h2>
             <p>Summer is the hottest season of the year. The days are long, bright, and sunny. People wear light clothes to stay cool and often enjoy swimming, traveling, and eating cold foods like ice cream. Many fruits, such as mangoes and watermelons, are available during summer.</p>
        </div>
        </div>
        `)
}


else if(Season === "Autumn" || Season === "autumn"){
    document.write(`
        <div class="autumn">
        <div class="pic">
            <img src="autumn.jfif" alt="autumn">
        </div>
        <div class="txt">
            <h1>Autumn</h1>
            <h2>Temperature : 31°C</h2>
            <p>Autumn, also called Fall, comes after summer. During this season, the weather becomes cooler, and the leaves on many trees change color to red, yellow, and orange before falling to the ground. The days become shorter, and farmers harvest many crops. It is a calm and beautiful season.</p>
        </div>
        </div>
        `)

    }

else if(Season === "Winter" || Season === "winter"){
    document.write(`
         <div class="winter">
        <div class="pic">
            <img src="wintr.jfif" alt="winter">
        </div>
        <div class="txt">
            <h1>Winter</h1>
             <h2>Temperature : 12°C</h2>
             <p>Winter is the coldest season of the year. The days are shorter, and the nights are longer. In many countries, it snows during winter, while other places have cool and dry weather. People wear warm clothes, drink hot beverages, and spend more time indoors. Winter is also a season of many holidays and celebrations.</p>
        </div>
        </div>
        `)

    }
else if(Season === "Spring" || Season === "spring"){
    document.write(`
        <div class="spring">
        <div class="pic">
            <img src="spring.jfif" alt="spring">
        </div>
        <div class="txt">
            <h1>Spring</h1>
             <h2>Temperature : 28°C</h2>
             <p>Spring is the season that comes after winter. It is a pleasant and colorful season. The weather becomes warmer, flowers bloom, and trees grow fresh green leaves. Birds sing, and many animals become active again. People enjoy spending time outdoors because the weather is comfortable.</p>
        </div>
        </div>
        `)

    }

    else {
        alert("Invalid Output");
    }


