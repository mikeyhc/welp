FROM ubuntu:xenial
RUN apt-get update && apt-get install -y nodejs npm
RUN ln -s /usr/bin/nodejs /usr/bin/node
RUN useradd -u 1000 mikeyhc
USER mikeyhc
CMD [ "/bin/bash" ]
