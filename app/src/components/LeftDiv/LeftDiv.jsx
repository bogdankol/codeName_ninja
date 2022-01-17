import {nanoid} from 'nanoid';
import s from './LeftDiv.module.css'

function LeftDiv({ data, filteredImages, onDeleteImageHandler }) {

    return (
        <div className={s.currentInfoDiv}>
        <h4>Current information about the hero</h4>
        <div className={s.forHeroDiv}>
          <h3>{data.nickname}</h3>
          <ul className={s.imgList}>
            {filteredImages && filteredImages.map((image) => {
              return (
                <li key={nanoid()} className={s.listItem}>
                  {filteredImages.length > 1 && <button
                    type="button"
                    data-src={image.imageUrl}
                    onClick={onDeleteImageHandler}
                    className={s.btn}>
                    X
                  </button>}
                  <img
                    src={image.imageUrl}
                    alt={image.nickname}
                    className={s.listItemImage}></img>
                </li>
              );
            })}
          </ul>
          <p>Real name: {data.realName}</p>
          <p>Catch phrase: {data.catchPhrase}</p>
          <p>Origin: {data.originDescription}</p>
          <p>Superpowers: {data.superpowers}</p>
        </div>
      </div>
    )
}

export default LeftDiv
