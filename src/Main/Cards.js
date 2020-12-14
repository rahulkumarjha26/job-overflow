import React from 'react'
import CardItem from './CardItem'
import './Cards.css'
function Cards (){

    return(
        <div className='cards'>
            <h1>Why us?</h1>
            <div className='cards__container'>
              
                    <ul className='cards__items'>     
                    <CardItem src='https://media2.giphy.com/media/muGYyrWwxOOMo/giphy.gif?cid=ecf05e473my5r22z8fz9xqrx1lc0356xbrd370q40g9u2ruj&rid=giphy.gif' notes='Thanks to our AI based Recruitement, with features like resume parsing and shortlisting on the basis of skills.' text='Shortlist only the best' />
                        <CardItem src='https://media0.giphy.com/media/3o7TKGOsxPEezK5zzy/giphy.gif?cid=ecf05e479700c08ab76352b4f7dc726b5e40396083d35fba&rid=giphy.gif' notes='Gone are the days when you had to email every single company via email. Just send us your resume and you are good to go' text='Get More Visibility' />
                        <CardItem src='https://media4.giphy.com/media/PaLrmoClRe8XFUubE0/giphy.gif?cid=ecf05e47yzbiuw8yw0tszxx378cgptz883wttzmd78fcbz4s&rid=giphy.gif' notes='With our high quality aptitude and logical tests. You can sit back and relax while we find the best candidates for you.' text='Verify Their Abilities' />
                        <CardItem src='https://media0.giphy.com/media/1yJEEsgy4q2bu/giphy.gif' notes='Organizing and dealing with your candidates is much easier thanks to our Artificial Chat Bots' text='Organize Your Candidates' />
                    </ul>
                
                    
                </div>

            
        </div>
    )
}

export default Cards;