/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getAlbumCategory = /* GraphQL */ `
  query GetAlbumCategory($id: ID!) {
    getAlbumCategory(id: $id) {
      id
      title
      albums {
        items {
          id
          name
          by
          numberOfLikes
          imageUri
          artistsHeadLine
          albumCategoryID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listAlbumCategorys = /* GraphQL */ `
  query ListAlbumCategorys(
    $filter: ModelAlbumCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAlbumCategorys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        albums {
          nextToken
          items {
            id
            imageUri
            artistsHeadLine
          }
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getAlbum = /* GraphQL */ `
  query GetAlbum($id: ID!) {
    getAlbum(id: $id) {
      id
      name
      by
      numberOfLikes
      imageUri
      artistsHeadLine
      songs {
        items {
          id
          imageUri
          uri
          title
          artist
          albumID
          createdAt
          updatedAt
        }
        nextToken
      }
      albumCategoryID
      albumCategory {
        id
        title
        albums {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listAlbums = /* GraphQL */ `
  query ListAlbums(
    $filter: ModelAlbumFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAlbums(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        by
        numberOfLikes
        imageUri
        artistsHeadLine
        songs {
          nextToken
        }
        albumCategoryID
        albumCategory {
          id
          title
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getSong = /* GraphQL */ `
  query GetSong($id: ID!) {
    getSong(id: $id) {
      id
      imageUri
      uri
      title
      artist
      albumID
      Album {
        id
        name
        by
        numberOfLikes
        imageUri
        artistsHeadLine
        songs {
          nextToken
        }
        albumCategoryID
        albumCategory {
          id
          title
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }

    }
  }
`;
export const listSongs = /* GraphQL */ `
  query ListSongs(
    $filter: ModelSongFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSongs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        imageUri
        uri
        title
        artist
        albumID
        Album {
          id
          name
          by
          numberOfLikes
          imageUri
          artistsHeadLine
          albumCategoryID
          createdAt
          updatedAt
        }
        content
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
