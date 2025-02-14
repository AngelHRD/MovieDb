<script>
  import {Search } from "$components/Search.svelte";
  import { onMount } from "svelte";

  let query = "";
  let results = [];
  let showResults = false;

  async function handleSearch() {
    if (query.length > 2) {
      const data = await searchMovies(fetch, query); 
      results = data?.results || [];
      showResults = results.length > 0;
    } else {
      results = [];
      showResults = false;
    }
  }

  function selectMovie(movie) {
    query = movie.title;
    showResults = false;
  }
</script>

<style>
  .search-container {
    position: relative;
    width: 300px;
  }

  .search-results {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background: white;
    border: 1px solid #ddd;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    max-height: 200px;
    overflow-y: auto;
    border-radius: 4px;
  }

  .search-item {
    padding: 8px;
    cursor: pointer;
  }

  .search-item:hover {
    background: #f0f0f0;
  }
</style>

<div class="search-container">
  <input
    type="text"
    bind:va
