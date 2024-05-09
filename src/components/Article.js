import React from "react";

function Article({ title, date, preview, minutes }) {
  // Calculate emojis for 'Minutes to Read'
  const coffeeCups = "☕️";
  const bentoBoxes = "🍱";
  const emojis =
    minutes < 30
      ? coffeeCups.repeat(Math.ceil(minutes / 5))
      : bentoBoxes.repeat(Math.ceil(minutes / 10));

  // Use a default date if none is provided
  const formattedDate = date || "January 1, 1970";

  return (
    <article>
      <h3>{title}</h3>
      <small>{formattedDate}</small>
      <p>
        {emojis} {minutes} min read
      </p>
      <p>{preview}</p>
    </article>
  );
}

export default Article;