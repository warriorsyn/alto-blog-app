import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import PostForm from './PostForm';

describe('PostForm', () => {
    test('renders form inputs and button', () => {
        const createPostMock = jest.fn();
        const updatePostMock = jest.fn();
        const postMock = null;

        render(
            <MemoryRouter>
                <PostForm createPost={createPostMock} updatePost={updatePostMock} post={postMock} />
            </MemoryRouter>
        );

        const titleInput = screen.getByPlaceholderText('SinglePost Title');
        const contentInput = screen.getByPlaceholderText('Write the post content');
        const cdnInput = screen.getByPlaceholderText('CDN Image');
        const submitButton = screen.getByRole('button', { name: /create/i });

        expect(titleInput).toBeInTheDocument();
        expect(contentInput).toBeInTheDocument();
        expect(cdnInput).toBeInTheDocument();
        expect(submitButton).toBeInTheDocument();

        const newTitleValue = 'New SinglePost Title';
        const newContentValue = 'New post content';
        const newCdnValue = 'https://new-cdn-url.com';

        fireEvent.change(titleInput, { target: { value: newTitleValue } });
        fireEvent.change(contentInput, { target: { value: newContentValue } });
        fireEvent.change(cdnInput, { target: { value: newCdnValue } });
        fireEvent.click(submitButton);

        expect(createPostMock).toHaveBeenCalledWith(newTitleValue, newContentValue, newCdnValue, expect.any(Function));
    });

    test('renders form inputs and button with post data', () => {
        const createPostMock = jest.fn();
        const updatePostMock = jest.fn();
        const postMock = {
            id: 1,
            title: 'Post Title',
            content: 'Post content',
            cdn: 'https://cdn-url.com',
            created: '2022-05-13T20:00:00.000Z',
        };

        render(
            <MemoryRouter>
                <PostForm createPost={createPostMock} updatePost={updatePostMock} post={postMock} />
            </MemoryRouter>
        );

        const titleInput = screen.getByDisplayValue(postMock.title);
        const contentInput = screen.getByDisplayValue(postMock.content);
        const cdnInput = screen.getByDisplayValue(postMock.cdn);
        const submitButton = screen.getByRole('button', { name: /update/i });

        expect(titleInput).toBeInTheDocument();
        expect(contentInput).toBeInTheDocument();
        expect(cdnInput).toBeInTheDocument();
        expect(submitButton).toBeInTheDocument();

        const newTitleValue = 'New Post Title';
        const newContentValue = 'New post content';
        const newCdnValue = 'https://new-cdn-url.com';

        fireEvent.change(titleInput, { target: { value: newTitleValue } });
        fireEvent.change(contentInput, { target: { value: newContentValue } });
        fireEvent.change(cdnInput, { target: { value: newCdnValue } });
        fireEvent.click(submitButton);

        expect(updatePostMock).toHaveBeenCalledWith(postMock.id
            , newTitleValue, newContentValue, newCdnValue, postMock.created,expect.any(Function));
    });
});


