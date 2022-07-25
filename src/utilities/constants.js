export const ENDPOINT = "https://rickandmortyapi.com/graphql";

export const QUERY = `{
    characters {
        info {
            count
            next
            prev
        }
        results {
            id
            name
            status
            species
            gender
            image
            episode {
                id
                name
                episode
            }
        }
    }
  }`;

export const SEARCH_QUERY = ` query SearchQuery($name: String!) {
    characters(filter: {name: $name}) {
        info {
            count
            next
            prev
        }
        results {
            id
            name
            status
            species
            gender
            image
            episode {
                id
                name
                episode
            }
        }
    }
  }`;

export const PAGE_QUERY = ` query PageQuery($page: Int!) {
    characters(page: $page) {
        info {
            count
            next
            prev
        }
        results {
            id
            name
            status
            species
            gender
            image
            episode {
                id
                name
                episode
            }
        }
    }
  }`;

export const INFO_QUERY = `{
    characters {
        info {
            count
            next
            prev
        }
    }
  }`;
