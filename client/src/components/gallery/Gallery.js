import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

import Image from './Image';
import ImageModal from '../ImageModal';

import image1 from '../../img/1.jpg';
import image2 from '../../img/2.jpg';
import image3 from '../../img/3.jpg';
import image4 from '../../img/4.jpg';
import image5 from '../../img/5.jpg';
import image6 from '../../img/6.jpg';
import image7 from '../../img/7.jpg';
import image8 from '../../img/8.jpg';
import image9 from '../../img/9.jpg';
import image10 from '../../img/10.jpg';
import image11 from '../../img/11.jpg';
import image12 from '../../img/12.jpg';
import image13 from '../../img/13.jpg';
import image14 from '../../img/14.jpg';
import image15 from '../../img/15.jpg';
import image16 from '../../img/16.jpg';
import image17 from '../../img/17.jpg';
import image18 from '../../img/18.jpg';
import image19 from '../../img/19.jpg';
import image20 from '../../img/20.jpg';
import image21 from '../../img/21.jpg';
import image22 from '../../img/22.jpg';
import image23 from '../../img/23.jpg';
import image24 from '../../img/24.jpg';
import image25 from '../../img/25.jpg';
import image26 from '../../img/26.jpg';
import image27 from '../../img/news1.jpg';
import image28 from '../../img/news2.jpg';
import image29 from '../../img/news3.jpg';
import image30 from '../../img/news4.jpg';

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <>
            <>
                <Helmet><title>Photo Gallery - Abia State Ministry of Education</title></Helmet>
            </>
            <section className="gallery">
                { selectedImage && <ImageModal setSelectedImage={setSelectedImage} selectedImage={selectedImage} /> }
                <h4>Photo Gallery</h4>
                <section>
                    <Image setSelectedImage={setSelectedImage} image={image1} />
                    <Image setSelectedImage={setSelectedImage} image={image2}  />
                    <Image setSelectedImage={setSelectedImage} image={image3} />
                    <Image setSelectedImage={setSelectedImage} image={image4} />
                    <Image setSelectedImage={setSelectedImage} image={image5} />
                    <Image setSelectedImage={setSelectedImage} image={image6} />
                    <Image setSelectedImage={setSelectedImage} image={image7} />
                    <Image setSelectedImage={setSelectedImage} image={image8} />
                    <Image setSelectedImage={setSelectedImage} image={image9} />
                    <Image setSelectedImage={setSelectedImage} image={image10} />
                    <Image setSelectedImage={setSelectedImage} image={image11} />
                    <Image setSelectedImage={setSelectedImage} image={image12} />
                    <Image setSelectedImage={setSelectedImage} image={image13} />
                    <Image setSelectedImage={setSelectedImage} image={image14} />
                    <Image setSelectedImage={setSelectedImage} image={image15} />
                    <Image setSelectedImage={setSelectedImage} image={image16} />
                    <Image setSelectedImage={setSelectedImage} image={image17} />
                    <Image setSelectedImage={setSelectedImage} image={image18} />
                    <Image setSelectedImage={setSelectedImage} image={image19} />
                    <Image setSelectedImage={setSelectedImage} image={image20} />
                    <Image setSelectedImage={setSelectedImage} image={image21} />
                    <Image setSelectedImage={setSelectedImage} image={image22} />
                    <Image setSelectedImage={setSelectedImage} image={image23} />
                    <Image setSelectedImage={setSelectedImage} image={image24} />
                    <Image setSelectedImage={setSelectedImage} image={image25} />
                    <Image setSelectedImage={setSelectedImage} image={image26} />
                    <Image setSelectedImage={setSelectedImage} image={image27} />
                    <Image setSelectedImage={setSelectedImage} image={image28} />
                    <Image setSelectedImage={setSelectedImage} image={image29} />
                    <Image setSelectedImage={setSelectedImage} image={image30} />
                </section>
            </section>
        </>
    );
};

export default Gallery;