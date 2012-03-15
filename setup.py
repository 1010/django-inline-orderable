#!/usr/bin/env python

from setuptools import find_packages, setup

setup(
    name='django-inline-orderable',
    version='0.1.0',
    author='Marco Fucci',
    author_email='info@marcofucci.com',
    url='https://github.com/1010/',
    description='An easy way of making inlines orderable using drag-and-drop.',
    packages=find_packages(),
    provides=['inline_orderable',],
    include_package_data=True,
    classifiers=[
        'Framework :: Django',
        'Environment :: Web Environment',
        'Programming Language :: Python',
        'Intended Audience :: Developers',
        'Operating System :: OS Independent',
        'License :: OSI Approved :: BSD License',
        'Topic :: Software Development :: Libraries :: Python Modules',
    ],
)