const { room } = require("../index");

class Room {
    create(obj) {
        return room.create({
            title : obj.title,
            hostID : obj.hostID,
            star : obj.star,
            img : obj.img,
            price : obj.price,
            review : obj.review,
            capacity : obj.capacity,
        });
    }
    
}

module.exports = Room;