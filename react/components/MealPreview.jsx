import plate from '../../images/plate.svg';

// The same preview can display the starter illustration, a sample, or a local photo.
export default function MealPreview({ image }) {
  return (
    <figure className="meal-preview mt-4 mb-0">
      <div className="meal-preview-image">
        <img src={image ? image.url : plate}
          alt={image ? (image.isSample ? 'Sample plate of chicken, rice, and broccoli' : 'Selected meal photo')
            : 'PlatePal illustration of chicken, rice, and broccoli'} />
      </div>
      <figcaption className="demo-note mt-3" aria-live="polite">
        {image ? image.name : 'Your next meal goes here. Choose a photo to get started.'}
      </figcaption>
    </figure>
  );
}
