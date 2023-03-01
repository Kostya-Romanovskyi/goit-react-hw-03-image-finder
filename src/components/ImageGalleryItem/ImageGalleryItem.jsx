import css from './ImageGalleryItem.module.css'

export default function ImageGalleryItem({ image }) {
    return <li className={css.ImageGalleryItem}>
        <img src={image} className={css.ImageGalleryItem__image} alt="" />
    </li >
}


