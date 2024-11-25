
## Inspiration
**MyWord** was born out of a personal struggle to improve my English communication skills, particularly vocabulary and grammar. Over the years, I tried reading grammar books, storybooks, and watching movies, but these methods presented challenges:  
- **Lost notes**: Often, the vocabulary and phrases I noted down were misplaced.  
- **Context loss**: Revisiting the notes later, I struggled to recall the specific use cases of the phrases or vocabulary.  
- **Portability**: Carrying physical notes everywhere was inconvenient.  

To overcome these hurdles, I envisioned a solution where users could effortlessly organize and access their vocabulary, grammar, and phrases from any device—be it a mobile phone or a computer.  

Additionally, with the integration of AI assistance, MyWord enables users to create conversations using their chosen vocabulary, grammar, and phrases. The app even learns user preferences and recommends content tailored to their needs.

## What it does
MyWord is an AI-powered platform designed to enhance English learning through a structured, interactive, and personalized approach:  
- **Content Organization**: Users can categorize and access vocabulary, grammar, and phrases seamlessly.  
- **Interactive Learning**: With collapsible panels, users can focus on specific topics of interest. The app tracks user interactions to provide customized suggestions.  
- **AI Assistant**: Enables users to simulate conversations using their selected vocabulary or grammar, making learning practical and engaging.  
- **Cross-Device Access**: Accessible on mobile, desktop, and other devices for consistent learning on the go.

## How we built it
This solution was crafted using a combination of AWS services and modern frameworks:  
- **AWS Amplify**: For hosting and UI components integration.  
- **DynamoDB**: To store user data efficiently.  
- **AWS Lambda**: To call the remote AI engine for generating conversations.  
- **AWS Cognito**: For secure user authentication.  
- **AWS API Gateway**: To handle URL redirections.  
- **AWS AppSync**: For GraphQL integration with DynamoDB.  
- **IAM**: To manage access controls and permissions.  


