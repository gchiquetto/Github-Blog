import { useForm } from 'react-hook-form'
import { SearchInput } from './styles'

interface FetchUserRepoIssuesType {
  fetchUserRepoIssues: (username: string, query: string) => Promise<void>
}

interface SearchData {
  query: string
}

export function FormSearch({ fetchUserRepoIssues }: FetchUserRepoIssuesType) {
  const { handleSubmit, reset, register } = useForm<SearchData>()

  function handleSearchIssue({ query }: SearchData) {
    fetchUserRepoIssues('gchiquetto', query)
    reset()
  }

  return (
    <form onSubmit={handleSubmit(handleSearchIssue)}>
      <SearchInput
        type="text"
        placeholder="Search content"
        {...register('query')}
      />
    </form>
  )
}
