import React, { useEffect } from 'react';

const FAB = () => {
    useEffect(() => {
		window.onscroll = () => {
			if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
				document.querySelector('.fab').style.display = 'block';
			} else {
			    document.querySelector('.fab').style.display = 'none';
			}
		};
    }, []);
    
    return (
        <a className="btn-floating fab" href="#top"><span className="mdi mdi-arrow-up"></span></a>
    );
};

export default FAB;