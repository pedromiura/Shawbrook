Project requested by Shawbrook for the 2nd stage interview.

Task board Jira: https://pedromiura.atlassian.net/jira/software/c/projects/SHAW/boards/1/backlog?view=detail&selectedIssue=SHAW-7&issueLimit=100

Figma designs: In the public folder.

Main challenges:

-Testing components with cypress that have context

-Avoiding prop drilling. Options considered: component composition/redux/context. Solution: context

-Reloading image. Initial solution: remounting component by updating key. Solution: updating image context.

-Dynamically updating the topic field on the form. Options considered: UseEffect listener/form watch function. Solution: watch function.

-Adding spinning effect to submit while image loads. Issue: There is a discrepancy between the URL being received and the image being loaded, it would be necessary to manage a context that starts on the form and ends on the image component by NextJS with the option to add a function onLoadCompleted but it's not possible to update the state in two different components at the same time.

-Loading images when deployed. Solution: updating config

-Using blur image with the Image component from Nextjs. Solution converting the unsplash blur url to base64 with external library (not implemented).