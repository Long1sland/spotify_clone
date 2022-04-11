import React, { useEffect, useState } from "react";

const useDataFetch = () => {
  const [recentlyPlayed, setRecentlyPlayed] = useState();
  const [recommended, setRecommended] = useState();
  const [newReleases, setNewReleases] = useState();
  const [relatedArtists, setRelatedArtists] = useState();
  const [artistsTopTracks, setArtistsTopTracks] = useState();
  const [featuredPlaylists, setFeaturedPlaylists] = useState();
  const [playlist, setPlaylist] = useState();

  async function fetchData(url) {
    let data = await fetch(url, {
      method: "GET",
      headers: {
        Authorization:
          "Bearer " +
          "BQCfbwabb5pKNRAMlqUrRDU9Jglqb8xrlcmDULJBjcmNs7KaN3F-cQ5l1n91BI3rzYd3hWuaO0V1QqJZkWjyq5i8dzF7_eztBr9lkgXOeu3WTxwFGKJW4xAtF74XptHWLRPWd5bxoUVacprDEXW9VqxS0Qc7MNNYErToStoiKdsbF9PykwzOX8-Z_0EXrwpUSsugcthuMwxDsD1AnJSsHidlpMWvjBpQVxVPTy5rKk6pux0hRlXiwFmY_sNudrrHRyGlm-cdqabd57a8dO3jPp3K2z8-28W3Vpx3ruLD",
      },
    });
    let final = await data.json();
    return final;
  }

  async function fetchRecentlyPlayed() {
    const data = await fetchData(
      "https://api.spotify.com/v1/me/player/recently-played"
    );

    const arranged = data.items.map((item) => {
      const image = item.track.album.images[0].url;
      const artist = item.track.artists[0].name;
      const artistId = item.track.artists[0].id;
      const songName = item.track.name;
      const preveiwUrl = item.track.preview_url;

      return {
        image: image,
        artist: artist,
        songName: songName,
        artistId: artistId,
        previewUrl: preveiwUrl,
        isPlaying: false,
      };
    });

    fetchRelatedArtists(arranged[0].artistId, arranged[0].artist);
    fetchArtistsTopTracks(arranged[0].artistId, arranged[0].artist);
    setRecentlyPlayed(arranged);
    console.log(arranged);
  }

  async function fetchRecommended() {
    const data = await fetchData(
      "https://api.spotify.com/v1/recommendations?limit=15&market=ES&seed_artists=4NHQUGzhtTLFvgF5SZesLK&seed_genres=classical%2Cpop&seed_tracks=0c6xIDDpzE81m2q797ordA"
    );

    const arranged = data.tracks.map((track) => {
      const image = track.album.images[0].url;
      const artist = track.artists[0].name;
      const songName = track.album.name;
      const previewUrl = track.preview_url;

      return {
        image: image,
        artist: artist,
        songName: songName,
        previewUrl: previewUrl,
        isPlaying: false,
      };
    });

    setRecommended(arranged);
  }

  async function fetchNewReleases() {
    const data = await fetchData(
      "https://api.spotify.com/v1/browse/new-releases?country=SE&limit=15&offset=5"
    );

    const arranged = data.albums.items.map((item) => {
      const image = item.images[0].url;
      const artist =
        item.artists.length > 1
          ? `${item.artists[0].name} and ${item.artists[1].name}`
          : item.artists[0].name;
      const songName = item.name;

      return {
        image: image,
        artist: artist,
        songName: songName,
        isPlaying: false,
      };
    });

    setNewReleases(arranged);
  }

  async function fetchRelatedArtists(artistId, seedArtist) {
    const data = await fetchData(
      `https://api.spotify.com/v1/artists/${artistId}/related-artists`
    );

    const arranged = data.artists.map((item) => {
      const image = item.images[0].url;
      const artist = item.name;
      const songName = "Artist";
      const main = seedArtist; //the name of the arstist all other artists genrated in this fetch request is based on

      return {
        image: image,
        artist: artist,
        songName: songName,
        seedArtist: main,
        isPlaying: false,
      };
    });

    setRelatedArtists(arranged);
  }

  async function fetchArtistsTopTracks(artistId, seedArtist) {
    const data = await fetchData(
      `https://api.spotify.com/v1/artists/${artistId}/top-tracks?market=ES`
    );

    const arranged = data.tracks.map((item) => {
      const image = item.album.images[0].url;
      const artist = item.artists[0].name;
      const songName = item.name;
      const main = seedArtist; //the name of the arstist all other artists genrated in this fetch request is based on
      const previewUrl = item.preview_url;

      return {
        image: image,
        artist: artist,
        songName: songName,
        seedArtist: main,
        previewUrl: previewUrl,
        isPlaying: false,
      };
    });

    setArtistsTopTracks(arranged);
  }
  async function fetchFeaturedPlaylists() {
    const data = await fetchData(
      "https://api.spotify.com/v1/browse/featured-playlists?country=US&timestamp=2014-10-23T09%3A00%3A00.000Z&limit=10&offset=5"
    );
    console.log(data);

    const arranged = data.playlists.items.map((item) => {
      const image = item.images[0].url;
      const artist = item.description;

      const songName = item.name;

      return {
        image: image,
        artist: artist,
        songName: songName,
        isPlaying: false,
      };
    });
    setFeaturedPlaylists(arranged);
  }

  async function fetchPlaylist() {
    const data = await fetchData(
      "https://api.spotify.com/v1/playlists/5pghAvs7DCzUhAyVanIZ8e/tracks?limit=10"
    );
    console.log(data);
    const arranged = data.items.map((item) => {
      const image = item.track.album.images[0].url;
      const artist = item.track.artists[0].name;
      const previewUrl = item.track.preview_url;
      const songName = item.track.name;

      return {
        image: image,
        artist: artist,
        songName: songName,
        previewUrl: previewUrl,
        isPlaying: false,
      };
    });

    setPlaylist(arranged);
  }

  useEffect(() => {
    fetchRecentlyPlayed();
    fetchRecommended();
    fetchNewReleases();
    fetchFeaturedPlaylists();
    fetchPlaylist();
  }, []);

  return {
    recentlyPlayed,
    setRecentlyPlayed,
    recommended,
    newReleases,
    relatedArtists,
    artistsTopTracks,
    featuredPlaylists,
    playlist,
  };
};

export default useDataFetch;
