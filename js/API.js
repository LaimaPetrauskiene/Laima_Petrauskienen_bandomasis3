const baseURL = "http://localhost:3000";


class API {


    static fetchFurniture = (success, failure) => {
        setTimeout(() => {
            fetch(`${baseURL}/furniture`)
                .then(res => res.json())
                .then(success)
                .catch(failure)
        }, 1000);
    }

    static deleteFurniture = (id, success, failure) => {
        fetch(`${baseURL}/furniture/${id}`, { method: 'DELETE' })
            .then(res => res.status === 200 ? success() : failure(res.statusText))
            .catch(failure)
    }


}


// API.fetchFurniture(
 //   console.log,
 //   console.error
// )


// API.deleteFurniture(
//     "2",
//     () => console.log('Ištrinta sėkmingai'),
//     console.error
// )