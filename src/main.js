import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { getImagesByQuery } from "./js/pixabay-api";
import {
    createGallery,
    clearGallery,
    showLoader,
    hideLoader,
    showLoadMoreButton,
    hideLoadMoreButton,
} from "./js/render-function";
 
const form = document.querySelector('.form');
const loadMoreBtn = document.querySelector('.load-more');

let page = 1;
let query = '';
let totalHits = 0;
const perPage = 15;

form.addEventListener('submit', async event => {
    event.preventDefault();

    query = event.target.elements['search-text'].value.trim();

    if (!query) return;

    page = 1;

    clearGallery();
    hideLoadMoreButton();
    showLoader();

    try {
        const data = await getImagesByQuery(query, page);

        totalHits = data.totalHits;

        if (data.hits.length === 0) {
            iziToast.error({
                message: "Sorry, there are no images matching your search query.",
                position: "topRight"
            });
            return;
        }

        createGallery(data.hits);

        if (totalHits > perPage) {
            showLoadMoreButton();
        }

    } catch (error) {
        console.log(error);
    } finally {
        hideLoader();
    }
});

loadMoreBtn.addEventListener('click', async () => {
    page += 1;

    showLoader();

    try {
        const data = await getImagesByQuery(query, page);

        createGallery(data.hits);

        const totalPages = Math.ceil(totalHits / perPage);

        if (page >= totalPages) {
            hideLoadMoreButton();

            iziToast.info({
                message: "We're sorry, but you've reached the end of search results.",
                position: "topRight"
            });
        }

        const card = document.querySelector('.gallery-item');
        const gallery = document.querySelector('.gallery');

        const cardHeight = card.getBoundingClientRect().height;
        const gap = 24;
        const info = 60;

        window.scrollBy({
            top: (cardHeight + gap + info) * 2,
            behavior: "smooth",
        });

    } catch (error) {
        console.log(error);
    } finally {
        hideLoader();
    }
});