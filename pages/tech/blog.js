import Layout from "../../components/Layout";

export default function BlogPage() {
  return (
    <Layout title="Tech Blog">
      <h1>Why Users Care How You Write A Code</h1>
      <p>
        The only thing that matters in software is the experience of the user. I
        totally agree with this statement, but I believe that it has broader
        implications than Ryan's suggesting. At a previous employer, I was asked
        to add a single checkbox and label to the contents of a popover. When
        asked how long this would take, I considered that the logic for that
        part of the app was in a Backbone view that was over 1,000 lines long
        and it extended another Backbone view that was over 2,000 lines long. I
        estimated it would take a week, and the PM was horrified. What's worse
        is it actually took closer to three weeks. 😱 Why did it take so long?
        The code was unmaintainable. I was able to add the checkbox easily
        enough, but getting the data from the checkbox to update the model was a
        nightmare. If that wasn't enough, the number of bugs I introduced with
        my hacky example was frightening because (of course) those files had
        leaky abstractions all over the place and absolutely no tests. Now,
        consider if the component had been built with SOLID programming
        principles (DRY, SRP, etc. etc.). I probably could have finished that
        feature in a day or less. So did the way the app code was written impact
        the end user? You betcha. Did the user care that they had to wait weeks
        rather than days for the new feature? Yeah, they totally cared
      </p>
    </Layout>
  );
}
