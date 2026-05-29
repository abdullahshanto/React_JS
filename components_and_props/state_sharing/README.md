This project demonstrates State Sharing between two sibling components using the "Lifting State Up" pattern.

The Problem it Solves
Usually, components are isolated. If ChildA wants to change something that ChildB shows, they can't talk to each other directly.

The Solution (How it works)
The Parent holds the data: The count state is kept in the Parent component.
ChildA updates the data: Parent sends a function (setCount) to ChildA. When you click the button in ChildA, it triggers that function to increase the number.
ChildB shows the data: Parent sends the actual count number to ChildB.
The Result
Even though ChildA and ChildB are separate, clicking the button in one updates the display in the other because they are both connected to the same "source of truth" in the Parent.

