import image from '../../images/bg/notfound-sm@1x-1.png';




export const NotFoundHero = () => {
    return (
        <>
        <h2>Ooops! This page not found </h2>
        <img srcSet={`${image} 219w, `}
        src={image}
        sizes="(max-width: 767px) 219px, (max-width: 767px) 437px, (min-width: 768px) 454px, (min-width: 768px) 907px, 100vw"
        alt="cat"
        loading="lazy" 
        />    
              
        </>
        
    )
};

