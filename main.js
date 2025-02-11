console.log(axios);

const getData = async () => {
    //Fetch


    // let params = new URLSearchParams();
    // if(userID){
    //         params.append("userID", 2);
    //     }
    //     let response = await fetch("https://jsonplaceholder.typicode.com/posts" + params);
    //     console.log(response);
    //     let json = await response.json();
    //     console.log(json);
        
        
        //Axios
        let userID = 5;
        let text;
        let funnyStuff;
        
        let response = await axios.get("https://jsonplaceholder.typicode.com/posts", {
            params: {
                // Parametrar som inte har ett värde tas automatiskt bort av axios
                userId: userID,
                type: text,
                test: funnyStuff
            }
        });
        //Vi har all data tillgängligt i response.data
    let posts = response.data;
    console.log(posts);

}

getData();