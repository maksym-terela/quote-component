const { __ } = wp.i18n;

const {
    RichText,
    MediaUpload,
    AlignmentToolbar,
    BlockControls,
    BlockAlignmentToolbar,
    InspectorControls,
    PanelColorSettings,
} = wp.editor;


const {
    Button
} = wp.components;

function edit( props ) {
    const { attributes: { title, authorTitle, imgURL, imgID, imgAlt, textAlignment, blockAlignment, colorPalette, textPalette  }, className, setAttributes, isSelected } = props;
    const onChangeHeader = title => { setAttributes( { title } ) };
    const onChangeTitle = authorTitle => { setAttributes( { authorTitle } ) };
    const onSelectImage = img => {
        setAttributes({
            imgID: img.id,
            imgURL: img.sizes.medium.url,
            imgAlt: img.alt,
        })
    };
    const onRemoveImage = () => {
        setAttributes({
            imgID: null,
            imgURL: null,
            imgAlt: null,
        })
    };
    return [
        <InspectorControls>
            <PanelColorSettings
                title={__("Panel Color", "_qc")}
                colorSettings={[
                    {
                        value: colorPalette,
                        onChange: colorPalette => {setAttributes({ colorPalette });},
                        label: __("Select Background Color"),
                    },
                    {
                        value: textPalette,
                        onChange: textPalette => {setAttributes({ textPalette });},
                        label: __( 'Select Text Color' ),
                    },
                ] }
            >
            </PanelColorSettings>

        </InspectorControls>,

        <BlockControls>
            <AlignmentToolbar
                value={ textAlignment }
                onChange={ textAlignment => setAttributes( { textAlignment } ) }
            />
            <BlockAlignmentToolbar
                value={ blockAlignment }
                onChange={ blockAlignment => setAttributes( { blockAlignment } ) }
            />
        </BlockControls>,

        <div className={ className } style={ { backgroundColor: colorPalette } }>

            <div className="image">
                {
                    ! imgID ? (

                        <MediaUpload
                            onSelect={ onSelectImage }
                            type="image"
                            value={ imgID }
                            render={ ( { open } ) => (
                                <Button
                                    className={ "button button-large" }
                                    onClick={ open }
                                >
                                    { __( 'Add Image', '_qc' ) }
                                </Button>
                            ) }
                        >
                        </MediaUpload>

                    ) : (

                        <React.Fragment>

                            <img
                                src={ imgURL }
                                alt={ imgAlt }
                            />

                            { isSelected ? (

                                <Button
                                    className="remove-image"
                                    onClick={ onRemoveImage }
                                >
                                    Remove Image
                                </Button>

                            ) : ( null )
                            }

                        </React.Fragment>
                    )
                }

            </div>
            <div className="info" style={ { color: textPalette  } }>
                <i className="fas fa-quote-left"></i>
                <RichText
                    tagName="p"
                    placeholder={ __( "Add Person Title", "_qc" ) }
                    onChange= { onChangeHeader }
                    value={ title }
                    style={ { color: textPalette } }
                />
                <RichText
                    tagName="h6"
                    placeholder={ __( "Add Job Title", "_qc" ) }
                    onChange= { onChangeTitle }
                    value={ authorTitle }
                    style={ { color: textPalette } }
                />
                <div className="social-list">
                    <a style={ { color: textPalette } } className="twitter">Tweet this</a>
                    <a style={ { color: textPalette } } className="instagram">Download fo Instagram</a>
                </div>
            </div>
        </div>
    ];
            }
export default edit;