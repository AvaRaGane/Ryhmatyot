const db = require('../database');

const eventLog={
    getEventData: function(callback){
        return db.query("SELECT * FROM eventlog", callback);
    },
    getOneEvent: function(id, callback){
        return db.query("SELECT * FROM eventlog where id_event=?", [id], callback);
    },
    addEvent: function(newEvent, callback){
<<<<<<< HEAD
        return db.query("INSERT INTO eventlog(id_automat,id_account,id_card,event_type,amount,time) values(?,?,?,?)", 
        [newEvent.id_automat,newEvent.id_account, newEvent.id_card, 
        newEvent.event_type, newEvent.amount, newEvent.time], callback);
=======
        return db.query("INSERT INTO eventlog (id_automat, id_account, id_card, event_type, amount, time) values (?,?,?,?,?,?)", [
            newEvent.id_automat,
            newEvent.id_account,
            newEvent.id_card,
            newEvent.event_type,
            newEvent.amount,
            newEvent.time
        ], callback);
>>>>>>> main
    }
};

module.exports=eventLog;
