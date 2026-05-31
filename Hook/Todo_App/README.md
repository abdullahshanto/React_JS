Data Flow.......


User Adds Todo
       >
setTodos()
       >
todos state changes
       ↓
useEffect runs
       >
localStorage updated
       >
Refresh page
       >
Todos loaded from localStorage
