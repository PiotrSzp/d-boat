import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';
import YouTube from 'react-youtube';

class Carousel extends Component {
    state = {
        showVideo: {},
    };

    images = [
        {
            original: `https://img.youtube.com/vi/${ 'dOTJXtRFVuM' }/maxresdefault.jpg`,
            thumbnail: `https://img.youtube.com/vi/${ 'dOTJXtRFVuM' }/0.jpg`,
            embedUrl: 'https://www.youtube.com/embed/dOTJXtRFVuM?autoplay=1&showinfo=0',
            videoId: 'dOTJXtRFVuM',
            renderItem: this._renderVideo.bind(this)
        },
        {
            original: `https://img.youtube.com/vi/${ '-fi5NRacpZ8' }/maxresdefault.jpg`,
            thumbnail: `https://img.youtube.com/vi/${ '-fi5NRacpZ8' }/0.jpg`,
            embedUrl: 'https://www.youtube.com/embed/-fi5NRacpZ8?autoplay=1&showinfo=0',
            videoId: '-fi5NRacpZ8',
            renderItem: this._renderVideo.bind(this)
        },
        {
            original: 'https://picsum.photos/id/1015/1000/600/',
            thumbnail: 'https://picsum.photos/id/1015/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1019/1000/600/',
            thumbnail: 'https://picsum.photos/id/1019/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1019/1000/600/',
            thumbnail: 'https://picsum.photos/id/1019/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1019/1000/600/',
            thumbnail: 'https://picsum.photos/id/1019/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1019/1000/600/',
            thumbnail: 'https://picsum.photos/id/1019/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1019/1000/600/',
            thumbnail: 'https://picsum.photos/id/1019/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1019/1000/600/',
            thumbnail: 'https://picsum.photos/id/1019/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1019/1000/600/',
            thumbnail: 'https://picsum.photos/id/1019/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1019/1000/600/',
            thumbnail: 'https://picsum.photos/id/1019/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1019/1000/600/',
            thumbnail: 'https://picsum.photos/id/1019/250/150/',
        },
    ];

    _onSlide(index) {
        this._resetVideo();
    }

    _resetVideo() {
        this.setState({ showVideo: {} });

        if (this.state.showPlayButton) {
            this.setState({ showGalleryPlayButton: true });
        }

        if (this.state.showFullscreenButton) {
            this.setState({ showGalleryFullscreenButton: true });
        }
    }

    _toggleShowVideo(url) {
        // this.state.showVideo[url] = !Boolean(this.state.showVideo[url]);
        const newState = {
            [url]: !Boolean(this.state.showVideo[url])
        };
        this.setState({
            // showVideo: this.state.showVideo
            showVideo: newState
        });

        if (this.state.showVideo[url]) {
            if (this.state.showPlayButton) {
                this.setState({ showGalleryPlayButton: false });
            }

            if (this.state.showFullscreenButton) {
                this.setState({ showGalleryFullscreenButton: false });
            }
        }
    }

    _renderVideo(item) {
        return (
            <div className='image-gallery-image'>
                {
                    this.state.showVideo[item.embedUrl] ?
                        <div className='video-wrapper'>
                            <a
                                className='close-video'
                                onClick={ this._toggleShowVideo.bind(this, item.embedUrl) }
                            >
                            </a>
                            {/*<iframe*/ }
                            {/*    width='560'*/ }
                            {/*    height='315'*/ }
                            {/*    src={ item.embedUrl }*/ }
                            {/*    frameBorder='0'*/ }
                            {/*    allowFullScreen*/ }
                            {/*>*/ }
                            {/*</iframe>*/ }
                            <YouTube
                                videoId={ item.videoId }
                                opts={ {
                                    playerVars: {
                                        autoplay: 1
                                    }
                                } }
                            />
                        </div>
                        :
                        <a onClick={ this._toggleShowVideo.bind(this, item.embedUrl) }>
                            <div className='play-button' />
                            <img src={ item.original } />
                            {
                                item.description &&
                                <span
                                    className='image-gallery-description'
                                    style={ { right: '0', left: 'initial' } }
                                >
                    { item.description }
                  </span>
                            }
                        </a>
                }
            </div>
        );
    }


    render() {
        return (
            <section>
                <ImageGallery
                    items={ this.images }
                    showFullscreenButton={ false }
                    showPlayButton={ false }
                    additionalClass='model-image-gallery'
                    onSlide={ this._onSlide.bind(this) }
                />
            </section>
        );
    }
}

export default Carousel;
