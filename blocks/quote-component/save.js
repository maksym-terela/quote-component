import classnames from "classnames";

function save( props ) {
    const { attributes: { title, authorTitle, imgURL, imgAlt, textAlignment, blockAlignment, colorPalette, textPalette }, className } = props;
    return (
        <div id="wp-block-testimonials-extendedblock"
            className={ classnames(
                `align${blockAlignment}`,
                className,
            )}
            style={ { backgroundColor: colorPalette } }
        >
            <div className="image">
                <img
                    src={ imgURL }
                    alt={ imgAlt }
                />
            </div>
            <div className="info" style={ { color: textPalette  } }>
                <i className="fas fa-quote-left"></i>
                <p style={ { color: textPalette } }>{ title }</p>
                <h6 style={ { color: textPalette } }>{ authorTitle }</h6>
                <div className="social-list">
                    <a style={ { color: textPalette } } href={'https://twitter.com/intent/tweet?text="' + title + '"%20-%20' + authorTitle} className="twitter">Tweet this</a>
                    <a style={ { color: textPalette } } className="instagram" id="instagram">Download fo Instagram</a>
                </div>
            </div>
        </div>
    );

}

export default save;