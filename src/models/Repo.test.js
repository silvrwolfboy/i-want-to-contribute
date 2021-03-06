// @flow
import Repo from './Repo';

describe('Repo', () => {
  const baseAttrs = {
    id: 123,
    fullName: 'facebook/react',
    name: 'react',
    language: 'JavaScript'
  };

  it('is new-able', () => {
    const subject = new Repo(baseAttrs);
    expect(subject.fullName).toEqual('facebook/react')
  });

  it('sets default values', () => {
    const subject = new Repo({});
    expect(subject.additionalInformation).toEqual({});
  });

  describe('create', () => {
    it('creates a new Repo', () => {
      const subject = Repo.create(baseAttrs);
      expect(subject instanceof Repo).toBeTruthy();
    });
  });
  describe('updateAndClone', () => {
    let repo;
    beforeEach(() => {
      repo = Repo.create({id: 123, fullName: 'facebook/react', name: 'react'});
    });

    it('returns a new repo', () => {
      const subject = repo.updateAndClone({fullName: 'facebookCode/react'});
      expect(subject).not.toBe(repo);
      expect(subject instanceof Repo).toBeTruthy();
    });

    it('updates attributes', () => {
      const subject = repo.updateAndClone({fullName: 'facebookCode/react'});
      expect(subject.fullName).toEqual('facebookCode/react');
    });
  });
});
