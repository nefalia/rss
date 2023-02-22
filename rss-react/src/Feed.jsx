import thumbnail from './300.jpg'

const Feed = ({ title, link, date, content }) => {
  let articleDate = new Date(date).toLocaleDateString('sv-SE')

  return (
    <>
      <li className='cards_item'>
        <div className='card'>
          <a href={link} className='card_link'>
            <div className='card_content'>
              <span className='card_pubdate'>{articleDate}</span>
              <h3 className='card_title'>{title}</h3>
              <p className='card_text'>{content}</p>
            </div>
          </a>
        </div>
      </li>
    </>
  )
}

export default Feed;