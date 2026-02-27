Add a “Clear Signature” button to the interface.

Placement

The button must be located directly below the Instructions button

Maintain consistent spacing and alignment with existing controls

Use the same visual hierarchy and style system

Behavior

Clicking the Clear Signature button must:

Open a confirmation modal

Prevent immediate deletion (no instant wipe)

Confirmation Modal

The modal must include:

Title:
Delete Signature?

Body:
This will permanently remove all entered information.
This action cannot be undone.

Buttons:

Primary (destructive):
→ Clear Signature

Secondary:
→ Cancel

Interaction Logic

If user clicks:

Cancel
→ Close modal
→ No changes

Clear Signature
→ Close modal
→ Remove ALL entered data from:

Input fields

Preview area

Generated signature

→ Do NOT reload the page

After Reset

System should:

Return focus to the first input field

Show a subtle toast message:

Signature cleared