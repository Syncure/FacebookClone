import React from 'react';
import "./Feed.css";
import MessageSender from './MessageSender';
import Post from './Post';
import StoryReel from './StoryReel';

function Feed() {
    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />
            
            <Post 
            profilePic="https://scontent.flim16-3.fna.fbcdn.net/v/t1.0-9/109845042_1545341845647377_1798270217019007529_n.jpg?_nc_cat=101&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeGixdyBadcRIeeT5364Vbni0aRXyux1tpzRpFfK7HW2nEverFstABCA7DHDkxT8dLEbHmNCVRRqKbQIU7offAEF&_nc_ohc=Clzmrv6lQ30AX9FGOfU&_nc_ht=scontent.flim16-3.fna&oh=b3b91296902007499f2273b69f04ece0&oe=5FF2C2CE"
            message="MIS WAIFUS <3!!!"
            timestamp="PSDT: SOY OTAKUUU"
            username="Andres Ramos"
            image="https://www.anmosugoi.com/wp-content/uploads/2020/08/anime-waifus-verano-summer-2020.jpg"
            />
            <Post profilePic="https://scontent.flim16-1.fna.fbcdn.net/v/t1.0-1/p320x320/119117716_1161078287611745_3240477881518686838_n.jpg?_nc_cat=108&amp;ccb=2&amp;_nc_sid=7206a8&amp;_nc_eui2=AeHi7O2ADodV9VAEH5iiyHuN3IAH0eEidivcgAfR4SJ2K_LtdY1PisZ8MLkniGjDhuGak28i4R6RSL98-1-gMBa4&amp;_nc_ohc=AME-JQiIukYAX-bxtbr&amp;_nc_ht=scontent.flim16-1.fna&amp;tp=6&amp;oh=4635ef38ff296c383fc70f410414e7f9&amp;oe=5FEC259D"
            message="WOWWWW This works"
            timestamp="Es un estado"
            username="Richard Vargas"
            image="https://mediamaster.vandal.net/m/14871/counterstrike-global-offensive-201911191049397_5.jpg"
            />        
        </div>
    )
}

export default Feed
