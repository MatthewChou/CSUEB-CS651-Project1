import plate from '../../images/empty-plate.png';

// The same preview can display the starter illustration, a sample, or a local photo.
export default function MealPreview({ image }) {
  return (
    <figure className="meal-preview mt-4 mb-0">
      <div className="meal-preview-image">
        <img src={image ? image.url : plate}
          className={!image || image.isSample ? 'pixel-plate-preview' : undefined}
          alt={image && !image.isSample ? 'Selected meal photo'
            : 'Pixel-art empty plate'} />
      </div>
      {!image?.isSample && (
        <figcaption className="demo-note mt-3" aria-live="polite">
          {image ? image.name : 'Your next meal goes here. Choose a photo to get started.'}
        </figcaption>
      )}
    </figure>
  );
}
