function gVC(event) {
    //event.preventDefault();
    data = new FormData(event.target);

    console.log(data.get('color'))

    event.target.action = "/Virtual-Card/" + `?to=${data.get("to")}&from=${data.get("from")}&occasion=${data.get("occasion")}`;
    
}