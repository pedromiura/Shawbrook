Project requested by Shawbrook for the 2nd stage interview.

Task board Jira: https://pedromiura.atlassian.net/jira/software/c/projects/SHAW/boards/1/backlog?view=detail&selectedIssue=SHAW-7&issueLimit=100

Figma designs: Upon request.

To run the project create .env.local file and add UNSPLASH_ACCESS_KEY and UNSPLASH_ACCESS_SecretKEY from unsplash.

Vercel deployment url: https://shawbrook.vercel.app/

Main challenges:

-Avoiding prop drilling. Options considered: component composition/redux/context. Solution: context

-Reloading image. Initial solution: remounting component by updating key. Solution: updating image context.

-Dynamically updating the topic field on the form. Options considered: UseEffect listener/form watch function. Solution: watch function.

-Adding spinning effect to submit while image loads. Issue: There is a discrepancy between the URL being received and the image being loaded, it would be necessary to manage a context that is updated on the form and on the image component by NextJS with the option to add a function onLoadCompleted but it's not possible to update the state in two different components at the same time. Solution: Update the state when the api request is completed.

-Loading images when deployed. Solution: updating config to include the source url.

-Using blur image with the Image component from Nextjs. Solution converting the unsplash blur url to base64 with external library (not implemented).

-Testing components with cypress that have context. Solution: not found.

-Testing E2E with cypress when images are requested from unsplash. Solution: Using intercept to analyse the request.