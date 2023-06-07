import { Switch, Route } from "react-router-dom"

import { Home } from "./pages/Home"
import { NewFavorite } from "./pages/NewFavorite"
import { EditFavorite } from "./pages/EditFavorite"

export function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/new" component={NewFavorite} />
      <Route path="/edit/:id" component={EditFavorite} />
    </Switch>
  )
}
