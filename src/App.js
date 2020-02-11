import React, { Component } from "react";

import Searchbar from "./components/Searchbar";
import ImageGallery from "./components/ImageGallery";
import Spinner from "./components/Spinner";
import Notification from "./components/Notification";
import Modal from "./components/Modal";
import galleryApi from "./services/galleryApi";

export default class App extends Component {
  state = {
    gallery: [],
    loading: false,
    error: null,
    searchQuery: "",
    page: 1,
    showModal: null
  };
  componentDidMount() {
    window.addEventListener("keydown", e => {
      if (e.code === "Escape") {
        this.closeModal();
      }
    });
  }
  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.searchQuery;
    const nextQuery = this.state.searchQuery;

    if (prevQuery !== nextQuery) {
      this.fetchGallery();
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth"
      });
    }
  }

  fetchGallery = () => {
    const { searchQuery, page } = this.state;

    galleryApi
      .fetchGalleryWithQuery(searchQuery, page)
      .then(gallery =>
        this.setState(prevState => ({
          gallery: [...prevState.gallery, ...gallery],
          page: prevState.page + 1
        }))
      )
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  };

  handleSearchForm = query => {
    this.setState({
      searchQuery: query
    });
  };
  handleModalUrl = url => {
    this.setState({
      showModal: url
    });
  };

  closeModal = () => {
    this.setState({
      showModal: null
    });
  };

  loadMore = () => {
    this.fetchGallery();
  };

  render() {
    const { gallery, error, loading, showModal } = this.state;
    return (
      <div>
        <Searchbar onSubmit={this.handleSearchForm} />
        {error && (
          <Notification
            message={`Opps something went wrong ${error.message}`}
          />
        )}
        {loading && <Spinner />}
        {gallery.length > 0 && (
          <ImageGallery gallery={gallery} imageEnlarge={this.handleModalUrl} />
        )}
        {gallery.length > 0 && (
          <button type="button" className="Button" onClick={this.loadMore}>
            Load More
          </button>
        )}
        {showModal && <Modal url={showModal} onClose={this.closeModal} />}
      </div>
    );
  }
}
