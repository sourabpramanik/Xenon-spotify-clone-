/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateAlbumCategory = /* GraphQL */ `
  subscription OnCreateAlbumCategory {
    onCreateAlbumCategory {
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
export const onUpdateAlbumCategory = /* GraphQL */ `
  subscription OnUpdateAlbumCategory {
    onUpdateAlbumCategory {
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
export const onDeleteAlbumCategory = /* GraphQL */ `
  subscription OnDeleteAlbumCategory {
    onDeleteAlbumCategory {
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
export const onCreateAlbum = /* GraphQL */ `
  subscription OnCreateAlbum {
    onCreateAlbum {
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
          content
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
export const onUpdateAlbum = /* GraphQL */ `
  subscription OnUpdateAlbum {
    onUpdateAlbum {
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
          content
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
export const onDeleteAlbum = /* GraphQL */ `
  subscription OnDeleteAlbum {
    onDeleteAlbum {
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
          content
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
export const onCreateSong = /* GraphQL */ `
  subscription OnCreateSong {
    onCreateSong {
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
      content
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateSong = /* GraphQL */ `
  subscription OnUpdateSong {
    onUpdateSong {
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
      content
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteSong = /* GraphQL */ `
  subscription OnDeleteSong {
    onDeleteSong {
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
      content
      createdAt
      updatedAt
    }
  }
`;
