import requests

API_URL = "https://jsonplaceholder.typicode.com/posts"

def get_posts():
    print("====== GET Posts (5 first posts, Jsonplaceholder) ======")
    try:
        response = requests.get(API_URL, timeout=5)
        response.raise_for_status()  
        posts = response.json()[:5]
        return posts
    except requests.exceptions.RequestException as e:
        print(f"An error occurred: {e}")
        return []
    
def get_post_by_id(post_id):
    print(f"====== GET Post by ID: {post_id} ======")
    try:
        response = requests.get(f"{API_URL}/{post_id}", timeout=5)
        response.raise_for_status()
        return response.json()
    except requests.exceptions.RequestException as e:
        print(f"An error occurred: {e}")
        return None
    
def post_new_post(title, body):
    print("====== POST New Post ======")
    try:
        data = {
            "title": title,
            "body": body,
            "userId": 1
        }
        response = requests.post(API_URL, json=data, timeout=5)
        response.raise_for_status()
        return response.json()
    except requests.exceptions.RequestException as e:
        print(f"An error occurred: {e}")
        return None
    

# Example usage
def ExampleUsage():
    posts = get_posts()
    if posts:
        for post in posts:
            print(f"Title: {post['title']}\nBody: {post['body']}\n")

    print("\n=====================================\n")

    id_to_get = input("Enter the ID of the post you want to retrieve: ")
    post = get_post_by_id(id_to_get)
    if post:
        print(f"Title: {post['title']}\nBody: {post['body']}\n")
    
    print("\n=====================================\n")

    title = input("Enter the title of the new post: ")
    body = input("Enter the body of the new post: ")
    new_post = post_new_post(title, body)
    if new_post:
        print(f"New Post Created:\nTitle: {new_post['title']}\nBody: {new_post['body']}\n")

    print("\n=====================================\n")


ExampleUsage()
    